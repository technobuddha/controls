import React from 'react';
import Popover from '@mui/material/Popover';
import { titleCase } from '@technobuddha/library';
import { clsx } from 'clsx';
import { useTranslation } from 'react-i18next';
import { HiMiniInformationCircle } from 'react-icons/hi2';
import { RiCloseLargeLine } from 'react-icons/ri';

import { Box } from '../box/index.ts';
import { IconButton } from '../icon-button/index.ts';
import { Tooltip } from '../tooltip/index.ts';
import { Typography } from '../typography/index.ts';

import css from './help.module.css' with { type: 'css' };

export type HelpProps = {
  readonly className?: string;
  readonly style?: React.CSSProperties;
  readonly title: string;
  readonly children?: React.ReactNode;
};

export const Help: React.FC<HelpProps> = ({ className, style, title, children }) => {
  const { t } = useTranslation();
  const anchorEl = React.useRef<HTMLDivElement>(null);
  const [open, setOpen] = React.useState(false);

  const handleClick = React.useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = React.useCallback(() => {
    setOpen(false);
  }, []);

  const titleText = React.useMemo(
    () => `${t(`Get help with`)} ${title} ${t('controls')}`,
    [t, title],
  );

  const id = open ? 'simple-popover' : undefined;
  const el = open ? anchorEl.current : undefined;

  return (
    <Box className={clsx(css.help, className)} style={style}>
      <Tooltip title={titleText} placement="top">
        <div ref={anchorEl}>
          <IconButton aria-describedby={id} size="small" onClick={handleClick}>
            <HiMiniInformationCircle className={css.icon} />
          </IconButton>
        </div>
      </Tooltip>
      <Popover
        id={id}
        open={Boolean(el)}
        classes={{ paper: css.paper }}
        anchorReference="anchorPosition"
        // anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        anchorPosition={{ top: 100, left: 240 }}
        onClose={handleClose}
        marginThreshold={72}
      >
        <Box className={css.popup}>
          <Box className={css.header}>
            <Typography className={css.title} variant="h1">
              {titleCase(title)}
            </Typography>
            <IconButton className={css.close} onClick={handleClose}>
              <RiCloseLargeLine />
            </IconButton>
          </Box>
          {children}
        </Box>
      </Popover>
    </Box>
  );
};
