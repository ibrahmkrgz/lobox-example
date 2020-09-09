import React, { FC, Suspense, lazy } from 'react';
import { faCamera } from '@fortawesome/pro-solid-svg-icons';
import Welcome from './components/Welcome';

// @ts-ignore
const Button = lazy(() => import('common/Button'));
// @ts-ignore
const Icon = lazy(() => import('common/Icon'));

const App:FC = () => {
  return (
    <div>
      <Suspense fallback={<span>Loading</span>}>
        <Button buttonType="primary" buttonSize="medium" onClick={console.log}>
          <Icon icon={faCamera} color="#fff" size="2x" />
        </Button>
      </Suspense>
      <Welcome>
        <span>Welcome</span>
      </Welcome>
    </div>
  );
};

export default App;
