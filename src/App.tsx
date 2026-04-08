import React from 'react';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router-dom';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/" component={Tab1} exact />
          <Route path="/tab2" component={Tab2} />
          <Route path="/tab3" component={Tab3} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;