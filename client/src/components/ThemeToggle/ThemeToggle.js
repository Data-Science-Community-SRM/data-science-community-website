import React from "react";

import "./ThemeToggle.css";

const ThemeToggle = () => {
    return (
      <React.Fragment>
        <div class="switch">
            <input type="checkbox" name="toggle"></input>
            <label for="toggle">
                <i class="bulb">
                    <span class="bulb-center"></span>
                    <span class="filament-1"></span>
                    <span class="filament-2"></span>
                    <span class="reflections">
                        <span></span>
                    </span>
                    <span class="sparks">
                        <i class="spark1"></i>
                        <i class="spark2"></i>
                        <i class="spark3"></i>
                        <i class="spark4"></i>
                    </span>
                </i>    
            </label>
        </div>
      </React.Fragment>
    )
  };
  
  export default ThemeToggle;