import React from 'react';
import {Helmet} from 'react-helmet';

export default function Background() {
      return (
          <div>
              <Helmet>
                  <style>{'body { background-color: #FFF; }'}</style>
              </Helmet>
              {/* The function 'Background' contains the React tag 'Helmet', a 
              component to dynamically manage the document's head section. The 'Helmet' tag comes from the 
              'react-helmet' library. 
              
              In this instance I have it to assist in changing the colour of the background. 
              The 'Style' tag attached to the helmet changes the colour using the hex code,
              which has been set to the hex #FFFDD0, or the colour 'Cream'. */}
          </div>
      );
    }
  ;