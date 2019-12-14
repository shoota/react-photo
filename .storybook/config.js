import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs'
import '../src/index.less'

// automatically import all files ending in *.stories.tsx
const req = require.context('../src/components', true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(withKnobs)
configure(loadStories, module);
