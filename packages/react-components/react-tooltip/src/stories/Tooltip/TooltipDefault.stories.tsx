import * as React from 'react';

import { Tooltip } from '@fluentui/react-tooltip';
import type { TooltipProps } from '@fluentui/react-tooltip';
import { Button } from '@fluentui/react-button';
import { SlideTextRegular } from '@fluentui/react-icons';

export const Default = (props: Partial<TooltipProps>) => (
  <Tooltip content="Example tooltip" relationship="label" {...props}>
    <Button icon={<SlideTextRegular />} size="large" />
  </Tooltip>
);

Default.parameters = {
  docs: {
    description: {
      story: `By default, Tooltip appears above its target element, when it is focused or hovered.`,
    },
  },
};
