// *************************************************************************************
//                                  Discriminating Unions
// *************************************************************************************

// /Users/davidbetteridge/Personal/types_talk/slides/typescript
// tsc 3_discriminating_unions.ts 

namespace Example3 {

    type NetworkLoadingState = {
    };

    type NetworkFailedState = {
        code: number;
    };
    
    type NetworkSuccessState = {
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

    // How do we know what type response is?
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