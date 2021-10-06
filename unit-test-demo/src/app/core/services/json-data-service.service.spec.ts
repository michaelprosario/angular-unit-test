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
            .setup(instance => instance.add(someObject, "points")) // this would be used for type discovering
            .returns("new-record-id")
            .object();

            let service = new JsonDataService(jsonRepository);

            // act
            expect(() => service.add(someObject, "")).toThrow(new Error("collection is not defined"));
        });        
    });

})

