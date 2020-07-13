/*
Copyright (c) 2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import {Layout} from './layout/';
// import {SIZE, Button as DatePicker} from './showcase-components/button';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import {
  useView,
  Compiler,
  Knobs,
  Editor,
  Error,
  ActionButtons,
  Placeholder,
} from '../src';
import {props, ExampleCustomInput, ExampleCustomHeader, ExampleCustomTimeInput} from './props'

// type MyContainer = {
//   className?: string;
//   children?: React.ReactNode;
// };
// const MyContainer = ({className, children}: MyContainer) => {
//   return (
//     <div style={{padding: '16px', background: '#216ba5', color: '#fff'}}>
//       <div className={className}>
//         <div style={{background: '#f0f0f0'}}>What is your favorite day?</div>
//         <div style={{position: 'relative'}}>{children}</div>
//       </div>
//     </div>
//   );
// };


const Basic = () => {
  const params = useView({
    componentName: 'DatePicker',
    props: props,
    scope: {
      DatePicker,
      ExampleCustomInput,
      ExampleCustomHeader,
      ExampleCustomTimeInput,
      // MyContainer, // not working
    },
    imports: {
      // 'your-button-component': {
      //   named: ['Button'],
      // },
    },
  });

  return (
    <Layout>
      <Compiler
        {...params.compilerProps}
        minHeight={62}
        placeholder={Placeholder}
      />
      <Error msg={params.errorProps.msg} isPopup />
      <Knobs {...params.knobProps} />
      <Editor {...params.editorProps} data-testid="rv-editor" />
      <Error {...params.errorProps} />
      <ActionButtons {...params.actions} />
    </Layout>
  );
};

export default Basic;
