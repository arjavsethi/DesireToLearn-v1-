import ProjectContext from "./projectContext";
import React from "react";


const ProjectState=(props)=>{
    //project object

    return (
        <ProjectContext.Provider
          value={{
            
          }}
        >
          {props.children}
        </ProjectContext.Provider>
      );
};

export default ProjectState;