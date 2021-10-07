
import { StringCalculatorService } from "./string-calculator-service";

describe("StringCalculatorService", () => {
    let service: StringCalculatorService = new StringCalculatorService();

    describe("add", () => {

        it("should return zero on empty string", () => {
            // arrange
            
            let input: string = "";

            // act
            let response = service.add(input);

            // assert            
            expect(response).toBe("0");
        });

        it("should return 3 on 1,2", () => {
            // arrange
            
            let input: string = "1,2";

            // act
            let response = service.add(input);

            // assert            
            expect(response).toBe("3");
        }); 

        it("should return 6 on 1,2,3", () => {
            // arrange
            
            let input: string = "1,2,3";

            // act
            let response = service.add(input);

            // assert            
            expect(response).toBe("6");
        });   

        it("should return 6 on 1.5,2,3", () => {
            // arrange
            
            let input: string = "1.5,2,3";

            // act
            let response = service.add(input);

            // assert            
            expect(response).toBe("6.5");
        });           

        it("should return 6 on 1.5,2,3", () => {
            // arrange
            
            let input: string = "1.5,2,3";

            // act
            let response = service.add(input);

            // assert            
            expect(response).toBe("6.5");
        });           

        it("should return 3 on 9,-6", () => {
            // arrange
            
            let input: string = "9,-6";

            // act
            let response = service.add(input);

            // assert            
            expect(response).toBe("3");
        });                   

        it("should return -6 on A,-6", () => {
            // arrange
            
            let input: string = "A,-6";

            // act
            let response = service.add(input);

            // assert            
            expect(response).toBe("-6");
        });                   

        // other ideas for being mean to the service
        // put a letter between commas
        // big float
    });
})