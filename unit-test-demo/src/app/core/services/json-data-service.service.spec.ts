import { AbstractJsonRepository } from "src/app/core/interfaces/abstract-json-repository";
import { JsonDataService } from "./json-data-service";
import { Mock, It, Times } from "moq.ts";

describe("jsonDataService", () => {

    describe("add", () => {

        it("returns record id on valid entry", () => {
            // arrange
            let someObject = {
                x: 1, y: 2, z: 3
            };

            const jsonRepository = new Mock<AbstractJsonRepository>()
            .setup(instance => instance.add(someObject, "points")) // this would be used for type discovering
            .returns("new-record-id")
            .object();

            let service = new JsonDataService(jsonRepository);

            // act
            let response = service.add(someObject, "points");

            // assert
            expect(response).toBe("new-record-id");
        });

        it("fails if collection is not defined", () => {
            // arrange
            let someObject = {
                x: 1, y: 2, z: 3
            };

            const jsonRepository = new Mock<AbstractJsonRepository>()
            .setup(instance => instance.add(someObject, "points"))
            .returns("new-record-id")
            .object();

            let service = new JsonDataService(jsonRepository);

            // act
            expect(() => service.add(someObject, "")).toThrow(new Error("collection is not defined"));
        });        
    });

    describe("delete", () => {

        it("deletes record on valid inputs", () => {
            // arrange
            let recordId = "testId";
            let collection = "points";

            const mockRepository = new Mock<AbstractJsonRepository>()            
            .setup(i => i.recordExists(recordId, collection)).returns(true)
            .setup(i => i.delete(recordId, collection)).returns(true)
            
            let service = new JsonDataService(mockRepository.object());

            // act
            let response = service.delete(recordId, collection);

            // assert
            //mockRepository.verify(i => i.delete(recordId, collection), Times.AtLeastOnce());            
            expect(response).toBeTruthy();
        });

    });

    describe("get", () => {

        it("returns record on valid inputs", () => {
            // arrange
            let recordId = "testId";
            let collection = "points";

            let aPoint = {
                x: 1, y:2, z: 3, id: "test1"
            }

            const mockRepository = new Mock<AbstractJsonRepository>()
            .setup(i => i.recordExists(recordId, collection)).returns(true)
            .setup(i => i.get(recordId, collection)).returns(aPoint)
            

            let service = new JsonDataService(mockRepository.object());

            // act
            let response = service.get(recordId, collection);

            // assert
            //mockRepository.verify(instance => instance.get(recordId, collection), Times.AtLeastOnce());            
            
            // @ts-ignore
            expect(response.x).toBe(1);
        });

    });

})

