import React from 'react';
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import classNames from 'classnames';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import './style.css';

const Accordion = () => (
  <AccordionPrimitive.Root className="AccordionRoot" type="single" defaultValue="item-1" collapsible>
    <AccordionPrimitive.Item className="AccordionItem" value="item-1">
      <AccordionTrigger>Is it accessible?</AccordionTrigger>
      <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
    </AccordionPrimitive.Item>

    <AccordionPrimitive.Item className="AccordionItem" value="item-2">
      <AccordionTrigger>Is it unstyled?</AccordionTrigger>
      <AccordionContent>
        Yes. It's unstyled by default, giving you freedom over the look and feel.
      </AccordionContent>
    </AccordionPrimitive.Item>

    <AccordionPrimitive.Item className="AccordionItem" value="item-3">
      <AccordionTrigger>Can it be animated?</AccordionTrigger>
      <AccordionPrimitive.Content className="AccordionContent">
        <div className="AccordionContentText">
          Yes! You can animate the Accordion with CSS or JavaScript.
        </div>
      </AccordionPrimitive.Content>
    </AccordionPrimitive.Item>
  </AccordionPrimitive.Root>
);

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ children, className, ...props }, ref) => (
  <AccordionPrimitive.Header className="AccordionHeader">
    <AccordionPrimitive.Trigger
      className={classNames('AccordionTrigger', className)}
      {...props}
      ref={ref}
    >
      {children}
      <ChevronDownIcon className="AccordionChevron" aria-hidden />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ children, className, ...props }, ref) => (
  <AccordionPrimitive.Content
    className={classNames('AccordionContent', className)}
    {...props}
    ref={ref}
  >
    <div className="AccordionContentText">{children}</div>
  </AccordionPrimitive.Content>
));

export default Accordion;