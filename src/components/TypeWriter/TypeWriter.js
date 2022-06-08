import React from 'react';
import TypeWriterEffect from 'react-typewriter-effect';
const TypeWriter = () => {
    return (
        <div>
             <TypeWriterEffect
        textStyle={{
          
          color: '#FFA001',
          fontWeight: 700,
          fontSize: '3.5em',
        }}
        startDelay={2000}
        cursorColor="#3F3D56"
        multiText={[
          "I'M HAMED HASAN",
          "I'M FULL STACK WEB DEVELOPER",
          "I'M GRAPHIC DESIGNER",
  
        ]}
        multiTextDelay={1000}
        typeSpeed={30}
      />
        </div>
    );
};

export default TypeWriter;