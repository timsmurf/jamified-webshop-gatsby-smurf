import * as React from 'react';
import { hiding, showing, toastWrapper } from './toast.module.css';

export function Toast({ show, duration = 1000, className, ...props }) {
  const [visible, setVisible] = React.useState(show);
  const [animation, setAnimation] = React.useState('');

  React.useEffect(() => {
    if (show) {
      setVisible(true);
    }
    const timeout = setTimeout(() => {
      setAnimation('');
      setVisible(show);
    }, duration);
    setAnimation(show ? showing : hiding);
    return () => clearTimeout(timeout);
  }, [show, duration]);

  return visible ? (
    <div
      className={[toastWrapper, animation, className].join(' ')}
      {...props}
    />
  ) : null;
}
