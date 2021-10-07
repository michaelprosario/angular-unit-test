import { AbstractJsonRepository } from "src/app/core/interfaces/abstract-json-repository";
import { JsonDataService } from "./json-data-service";
import { mock, instance, when, verify } from "ts-mockito";
import { JsonRepository } from "src/app/data/json-repository";

describe("jsonDataService", () => {

    describe("add", () => {

        it("returns record id on valid entry", () => {
            // arrange
            let someObject = {
                x: 1, y: 2, z: 3
            };

            let collection = "points";

            const mockedRepo: JsonRepository = mock(JsonRepository)
            when(mockedRepo.add(someObject, collection)).thenReturn("new-record-id")

            let repoInstance = instance(mockedRepo);
            let service = new JsonDataService(repoInstance);

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

            const jsonRepository = mock(JsonRepository);
            when(jsonRepository.add(someObject, "points")).thenReturn("new-record-id")


            let service = new JsonDataService(instance(jsonRepository));

            // act
            expect(() => service.add(someObject, "")).toThrow(new Error("collection is not defined"));
        });

    });


    describe("delete", () => {

        it("deletes record on valid inputs", () => {
            // arrange
            let recordId = "testId";
            let collection = "points";

            const mockRepository = mock(JsonRepository)
            when(mockRepository.recordExists(recordId, collection)).thenReturn(true)
            when(mockRepository.delete(recordId, collection)).thenReturn(true)

            let service = new JsonDataService(instance(mockRepository));

            // act
            let response = service.delete(recordId, collection);

            // assert
            verify(mockRepository.delete(recordId, collection)).once();

            expect(response).toBeTruthy();
        });

    });

    describe("get", () => {

        it("returns record on valid inputs", () => {
            // arrange
            let recordId = "testId";
            let collection = "points";

            let aPoint = {
                x: 1, y: 2, z: 3, id: "test1"
            }

            const mockRepository = mock(JsonRepository)
            when(mockRepository.recordExists(recordId, collection)).thenReturn(true);
            when(mockRepository.get(recordId, collection)).thenReturn(aPoint);

            let service = new JsonDataService(instance(mockRepository));

            // act
            let response = service.get(recordId, collection);

            // assert
            verify(mockRepository.get(recordId, collection)).once();

            // @ts-ignore
            expect(response.x).toBe(1);
        });

    });

    describe("getAll", () => {

        it("returns records on valid inputs", () => {
            // arrange            
            let collection = "points";

            let things = "These are really cool words".split(' ');

            const mockRepository = mock(JsonRepository)

            when(mockRepository.getAll(collection)).thenReturn(things);

            let service = new JsonDataService(instance(mockRepository));

            // act
            let response = service.getAll(collection);

            // assert

            // @ts-ignore
            expect(response.length).toBe(5);
        });

    });




})

