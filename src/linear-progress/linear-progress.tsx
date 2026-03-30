import React from 'react';
import {
  LinearProgress as MuiLinearProgress,
  type LinearProgressProps as MuiLinearProgressProps,
} from '@mui/material';

export type LinearProgressProps = {
  readonly style?: React.CSSProperties;
  readonly color?: MuiLinearProgressProps['color'];

  readonly children?: never;
};

export const LinearProgress: React.FC<LinearProgressProps> = ({
  children,
  ...props
}: LinearProgressProps) => <MuiLinearProgress {...props} />;
