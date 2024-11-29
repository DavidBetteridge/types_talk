// *************************************************************************************
//                                  Discriminating Unions
// *************************************************************************************

// /Users/davidbetteridge/Personal/types_talk/slides/typescript
// tsc 3_discriminating_unions.ts 

namespace Example3 {

    type NetworkLoadingState = {
        // state: "loading";
    };
    type NetworkFailedState = {
        // state: "failed";
        code: number;
    };
    type NetworkSuccessState = {
        // state: "success";
        response: {
        title: string;
        duration: number;
        summary: string;
        };
    };
    

    type NetworkState =
        | NetworkLoadingState
        | NetworkFailedState
        | NetworkSuccessState;

    const currentState: NetworkFailedState = { code: 404 };


    const handleStatus = (response: NetworkState) => {
    //     if (typeof response === NetworkLoadingState) {
    //         console.log("NetworkLoadingState");
    //     } else if (typeof response === "string") {
    //         console.log("NetworkFailedState");
    //     } else if (typeof response === "string") {
    //         console.log("NetworkSuccessState");        
    //     } else {
    //         throw new Error(`Unknown'${typeof response}'.`);
    //     }
    }

    handleStatus(currentState);



    // Look at 3_discriminating_unions.js 

}