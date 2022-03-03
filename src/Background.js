import React from 'react';
import {Helmet} from 'react-helmet';

export default function Background() {
      return (
          <div>
              <Helmet>
                  <style>{'body { background-color: #FFF; }'}</style>
              </Helmet>
          </div>
      );
    }
  ;