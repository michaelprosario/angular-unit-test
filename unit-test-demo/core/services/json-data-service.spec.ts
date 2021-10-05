import { AbstractJsonRepository } from "core/interfaces/abstract-json-repository";
import { JsonDataService } from "./json-data-service";
import { mock,when,instance, verify } from "ts-mockito";

describe("jsonDataService", () => {

    describe("add", () => {

        it("returns record id on valid entry", () => {
            // arrange
            let mockRepository = mock(AbstractJsonRepository);
            let someObject = {
                x: 1, y:2, z: 3
            };
            
            when(mockRepository.add(someObject, "points")).thenReturn('newRecordId');
            let jsonRepository: AbstractJsonRepository = instance(mockRepository);
            let service = new JsonDataService(jsonRepository);

            // act
            let response = service.add(someObject, "points");

            // assert

            expect(response).toBeDefined();
            verify(mockRepository.add(someObject, "points")).called(1);
        });

    });

})