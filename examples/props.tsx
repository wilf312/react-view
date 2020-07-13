/*
Copyright (c) 2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import {
  PropTypes,
} from '../src';

export  const ExampleCustomInput = ({value, onClick}: any) => (
  <button onClick={onClick}>{value}</button>
);

export  const ExampleCustomHeader = ({
  date,
  changeYear,
  changeMonth,
  decreaseMonth,
  increaseMonth,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled
}: any) => (
  <div>
    {date}
    <button disabled={prevMonthButtonDisabled} onClick={() => decreaseMonth()}>decreaseMonth</button>
    <button disabled={nextMonthButtonDisabled} onClick={() => increaseMonth()}>increaseMonth</button>
    <button onClick={() => changeYear()}>changeYear</button>
    <button onClick={() => changeMonth()}>changeMonth</button>
  </div>
)


export const ExampleCustomTimeInput = ({ value, onChange }: any) => (
  <input
    value={value}
    onChange={e => onChange(e.target.value)}
    style={{ border: "solid 1px pink" }}
  />
);


export const props = {
  // default
  selected: {
    value: '',
    type: PropTypes.Date,
    stateful: true,
    description: 'Visible label.',
  },

  dateFormat: {
    value: 'yyyy/MM/dd',
    type: PropTypes.String,
    description: 'input placeholder',
  },

  onChange: {
    value: '(date) => {console.log(date); setSelected(date)}',
    type: PropTypes.Function,
    description: `Function called when button is clicked.`,
  },
  // not working
  // calendarContainer: {
  //   value: MyContainer,
  //   type: PropTypes.ReactNode,
  //   description: `Function called when button is clicked.`,
  // },

  onCalendarClose: {
    value: '() => console.log("onCalendarClose",selected)',
    type: PropTypes.Function,
    description: `Function called when button is clicked.`,
  },

  onCalendarOpen: {
    value: '() => console.log("onCalendarOpen",selected)',
    type: PropTypes.Function,
    description: `Function called when button is clicked.`,
  },

  children: {
    value: '',
    type: PropTypes.ReactNode,
    description: 'Visible label.',
  },

  isClearable: {
    value: true,
    type: PropTypes.Boolean,
    description: 'Indicates that the button is disabled',
  },
  placeholderText: {
    value: 'I have been cleared!',
    type: PropTypes.String,
    description: 'input placeholder',
  },

  closeOnScroll: {
    value: true,
    type: PropTypes.Boolean,
    description: 'Close on scroll',
  },
  // closeOnScroll Event
  // closeOnScroll: {
  //   value: 'e => e.target === document',
  //   type: PropTypes.Function,
  //   description: `Function called when button is clicked.`,
  // },

  popperClassName: {
    value: 'some-custom-class',
    type: PropTypes.String,
    description: 'input placeholder',
  },
  popperPlacement: {
    value: 'bottom-end',
    type: PropTypes.String,
    description: 'input placeholder',
  },
  popperModifiers: {
    value: `{
      offset: {
        enabled: true,
        offset: "5px, 10px"
      },
      preventOverflow: {
        enabled: true,
        escapeWithReference: false,
        boundariesElement: "viewport"
      }
    }`,
    type: PropTypes.Object,
    description: 'input placeholder',
  },

  calendarClassName: {
    value: 'rasta-stripes',
    type: PropTypes.String,
    description: 'Custom calendar class name',
  },

  className: {
    value: 'input-text-class',
    type: PropTypes.String,
    description: 'input text class',
  },

  dayClassName: {
    value: `date => {
      const isBool = date.getDate() < Math.random() * 31
      console.log(isBool)
      return isBool ? "random" : undefined
    }`,
    type: PropTypes.Function,
    description: `Custom day class name`,
  },

  // Date Range
  /*
  selectsStart: {
    value: false,
    type: PropTypes.Boolean,
    description: 'Indicates that the button is disabled',
  },
  selectsEnd: {
    value: false,
    type: PropTypes.Boolean,
    description: 'Indicates that the button is disabled',
  },
  startDate: {
    value: 'startDate',
    type: PropTypes.String,
    description: 'input text class',
  },
  endDate: {
    value: 'endDate',
    type: PropTypes.String,
    description: 'input text class',
  },
   */

  showDisabledMonthNavigation: {
    value: true,
    type: PropTypes.Boolean,
    description: 'Indicates that the button is disabled',
  },

  minDate: {
    value: '2020-06-30',
    type: PropTypes.Date,
    stateful: true,
    description: 'Visible label.',
  },
  maxDate: {
    value: '2020-08-30',
    type: PropTypes.Date,
    stateful: true,
    description: 'Visible label.',
  },

  customInput: {
    value: '', // <ExampleCustomInput />
    type: PropTypes.ReactNode,
    description: '<ExampleCustomInput />',
  },

  renderCustomHeader: {
    value: '', // ExampleCustomHeader
    type: PropTypes.Function,
    description: 'ExampleCustomHeader',
  },
  renderDayContents: {
    value: `(day, date) => { const text = \`Tooltip for date: \${date}\`; return <span title={text}>{day}</span>; }`, // ExampleCustomHeader
    type: PropTypes.Function,
    description: 'ExampleCustomHeader',
  },

  customTimeInput: {
    value: '', // <ExampleCustomTimeInput />
    type: PropTypes.ReactNode,
    description: '<ExampleCustomTimeInput />',
  },

  // selectsRange:{
  //   value: false,
  //   type: PropTypes.Boolean,
  //   description: 'Indicates that the button is disabled',
  // },


  disabled: {
    value: false,
    type: PropTypes.Boolean,
    description: 'Indicates that the button is disabled',
  },

  disabledKeyboardNavigation: {
    value: false,
    type: PropTypes.Boolean,
    description: 'Indicates that the button is disabled',
  },
  showWeekNumbers: {
    value: false,
    type: PropTypes.Boolean,
    description: 'Indicates that the button is disabled',
  },

  shouldCloseOnSelect: {
    value: false,
    type: PropTypes.Boolean,
    description: 'Indicates that the button is disabled',
  },

  showTimeSelect: {
    value: false,
    type: PropTypes.Boolean,
    description: 'Indicates that the button is disabled',
  },

  timeClassName: {
    value: `time => {
      return time.getHours() > 12 ? "text-success" : "text-error";
    }`,
    type: PropTypes.Function,
    description: `time => {
      return time.getHours() > 12 ? "text-success" : "text-error";
    }`,
  },

  

  
};