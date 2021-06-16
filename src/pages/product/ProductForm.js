import React, { Component } from 'react';
import t from 'tcomb-form-native'
import ImageFactory from 'react-native-image-picker-form'

const Form = t.form.Form
const DocumentFormStruct = t.struct({
  image: t.String
})


export  class ProductForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: {},
      options: {
        fields: {
          image: {
            config: {
              title: 'Select image',
              options: ['Open camera', 'Select from gallery', 'Cancel']
              // Used on Android to style BottomSheet
              
            },
            error: 'No image provided',
            factory: ImageFactory
          }
        }
      }
    }
  }

  render() {
    return (
      <Form
        ref={(ref) => {
          this.form = ref
        }}
        type={DocumentFormStruct}
        value={this.state.value}
        options={this.state.options}
      />
    )
  }
}
// import React, { Component } from 'react';
// import { View, StyleSheet, Button } from 'react-native';

// import t from 'tcomb-form-native'; // 0.6.9

// const Form = t.form.Form;
// const TEXT = {
//   text_a: "Lorem ipsum dolor",
//   text_b: "Lorem",
// };
// const User = t.struct({
//   "שם המוצר":t.String,
//  "תיאור המוצר":t.String,
//   "מחיר לפני הנחה": t.Number,
//   "מחיר אחרי הנחה": t.String,
//   "מינמום נרשמים": t.String,
  
//   terms: t.Boolean
// });

// const formStyles = {
//   ...Form.stylesheet,
//   formGroup: {
//     normal: {
//       marginBottom: 10
//     },
//   },
//   controlLabel: {
//     normal: {
//       color: 'blue',
//       fontSize: 18,
//       marginBottom: 7,
//       fontWeight: '600'
//     },
//     // the style applied when a validation error occours
//     error: {
//       color: 'red',
//       fontSize: 18,
//       marginBottom: 7,
//       fontWeight: '600'
//     }
//   }
// }

// const options = {
//   fields: {
//     "שם המוצר": {
//       error: 'Without an email address how are you going to reset your password when you forget it?'
//     },
//     password: {
//       error: 'Choose something you use on a dozen other sites or something you won\'t remember'
//     },
//     terms: {
//       label: 'Agree to Terms',
//     },
//   },
//   stylesheet: formStyles,
// };

// export  class ProductForm extends Component {
//   handleSubmit = () => {
//     const value = this._form.getValue();
//     console.log('value: ', value);
//   }
  
//   render() {
//     return (
//       <View style={styles.container}>
//         <Form 
//           ref={c => this._form = c}
//           type={User} 
//           options={options}
//         />
//         <Button
//           title="Sign Up!"
//           onPress={this.handleSubmit}
//         />
//       </View>
//     );
//   }
// }  

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: 'center',
//     marginTop: 50,
//     padding: 20,
//     backgroundColor: '#ffffff',
//   },
// });
