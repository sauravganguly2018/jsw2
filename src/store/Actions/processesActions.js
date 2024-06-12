export const loadProcesses = () => {
  return async function (dispatch,getState) {
    try{
        const res = await fetch("http://localhost:9001/processes");
        const data= await res.json();
        dispatch({type:'processes/data',payload:data});
    }catch(error){
        console.log("error loading the data", error);
        dispatch({type:'dataFailed'})
    }
  };
};
