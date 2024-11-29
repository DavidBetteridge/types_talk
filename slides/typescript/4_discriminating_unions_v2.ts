// *************************************************************************************
//                                  Discriminating Unions
// *************************************************************************************

// /Users/davidbetteridge/Personal/types_talk/slides/typescript
// tsc 4_discriminating_unions_v2.ts 

namespace Example4 {

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

    function isNetworkFailedState(state: NetworkState): state is NetworkFailedState {
        return (state as NetworkFailedState).code !== undefined;
        }

    function isNetworkSuccessState(state: NetworkState): state is NetworkSuccessState {
        return (state as NetworkSuccessState).response !== undefined;
        }

    function isNetworkLoadingState(state: NetworkState): state is NetworkLoadingState {
        return ((state as NetworkSuccessState).response === undefined) &&
               ((state as NetworkFailedState).code !== undefined)
        }

    const currentState: NetworkFailedState = { code: 404 };


    const handleStatus = (response: NetworkState) => {
        if (isNetworkFailedState(response)) {
            console.log("NetworkFailedState");
        } else if (isNetworkSuccessState(response)) {
            console.log("NetworkSuccessState");
        } else if (isNetworkLoadingState(response)) {
            console.log("NetworkLoadingState");        
        } else {
            throw new Error(`Unknown'${typeof response}'.`);
        }
    }

    handleStatus(currentState);



    // Look at 4_discriminating_unions_v2.js 

}