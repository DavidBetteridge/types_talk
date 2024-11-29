// *************************************************************************************
//                                  Discriminating Unions
// *************************************************************************************

// /Users/davidbetteridge/Personal/types_talk/slides/typescript
// tsc 5_discriminating_unions_v3.ts 
namespace Example5 {

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

// Look at 5_discriminating_unions_v3.js 