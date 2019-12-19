import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs'
import '../src/index.less'

// automatically import all files ending in *.stories.tsx
const req = require.context('../src', true, /\.stories.tsx$/);
addDecorator(withKnobs)
configure(req, module);
