import './index.less';
import sub from './lib/sub';

export default (container, config) => {
  console.log(`config: ${JSON.stringify(config)}`);
  console.log(`sub module: ${sub()}`);
  document.body.textContent = 'Hello world';
  return 'test';
};
