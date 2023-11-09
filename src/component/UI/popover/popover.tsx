import * as React from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import './style.css';

const Popover = () => (
  <PopoverPrimitive.Root>
    <PopoverPrimitive.Trigger className="PopoverTrigger">More info</PopoverPrimitive.Trigger>
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content className="PopoverContent" sideOffset={5}>
        Some more info…
        <PopoverPrimitive.Arrow className="PopoverArrow" />
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Portal>
  </PopoverPrimitive.Root>
);

export default Popover;
