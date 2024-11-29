// *************************************************************************************
//                                  Discriminating Unions
// *************************************************************************************

// /Users/davidbetteridge/Personal/types_talk/slides/typescript
// tsc 4_discriminating_unions_v2.ts 
namespace Example4 {

  type NetworkLoadingState = {
      state: "loading";
    };

  type NetworkFailedState = {
    state: "failed";
    code: number;
  };

  type NetworkSuccessState = {
    state: "success";
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

  const currentState: NetworkFailedState = { code: 404, state: "loaded" };  //Fix me!


  const handleStatus = (response: NetworkState) => {
      if (response.state === "loading") {
          console.log("NetworkLoadingState");
      } else if (response.state === "failed") {
          console.log("NetworkFailedState");
      } else if (response.state === "success") {
          console.log("NetworkSuccessState");        
      } else {
          throw new Error(`Unknown '${typeof response}'.`);
      }
  }

  handleStatus(currentState);
}

// Look at 4_discriminating_unions_v2.js 