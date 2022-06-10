import React from 'react';
import TypeWriterEffect from 'react-typewriter-effect';
const TypeWriter = ({text}) => {
    return (
        <div>
             <TypeWriterEffect
        textStyle={{
          
          color: '#FFA001',
          fontWeight: 700,
          fontSize: '23px',
          
        }}
        startDelay={2000}
        cursorColor="#3F3D56"
        multiText={[
          "I'M HAMED HASAN",
          "I'M GRAPHIC DESIGNER",
          "I'M FULL STACK WEB DEVELOPER",
  
        ]}
        multiTextDelay={1000}
        typeSpeed={50}
      />
        </div>
    );
};

export default TypeWriter;