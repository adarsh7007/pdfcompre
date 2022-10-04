// // Import React
// import React, {useState} from 'react';
// // Import required components
// import {
//   SafeAreaView,
//   Text,
//   TouchableOpacity,
//   View,
//   StyleSheet,
//   Image,
//   PermissionsAndroid,
//   Platform,
// } from 'react-native';
 
// // Import HTML to PDF
// import RNHTMLtoPDF from 'react-native-html-to-pdf';
 
// const Pdfcom = () => {
//   const [filePath, setFilePath] = useState('');
 
//   const isPermitted = async () => {
//     if (Platform.OS === 'android') {
//       try {
//         const granted = await PermissionsAndroid.request(
//           PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
//           {
//             title: 'External Storage Write Permission',
//             message: 'App needs access to Storage data',
//           },
//         );
//         return granted === PermissionsAndroid.RESULTS.GRANTED;
//       } catch (err) {
//         alert('Write permission err', err);
//         return false;
//       }
//     } else {
//       return true;
//     }
//   };
 
//   const createPDF = async () => {
//     if (await isPermitted()) {
//       let options = {
//         //Content to print
//         html:
//           '<h1 style="text-align: center;"><strong>Hello Guys</strong></h1><p style="text-align: center;">Here is an example of pdf Print in React Native</p><p style="text-align: center;"><strong>Team About React</strong></p>',
//         //File Name
//         fileName: 'test',
//         //File directory
//         directory: 'docs',
//       };
//       let file = await RNHTMLtoPDF.convert(options);
//       console.log(file.filePath);
//       setFilePath(file.filePath);
//     }
//   };
 
//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <Text style={styles.titleText}>
//         Example to Make PDF in React Native from HTML Text
//       </Text>
//       <View style={styles.container}>
//         <TouchableOpacity onPress={createPDF}>
//           <View>
//             <Image
//               //We are showing the Image from online
//               source={{
//                 uri:
//                   'https://raw.githubusercontent.com/AboutReact/sampleresource/master/pdf.png',
//               }}
//               style={styles.imageStyle}
//             />
//             <Text style={styles.textStyle}>Create PDF</Text>
//           </View>
//         </TouchableOpacity>
//         <Text style={styles.textStyle}>{filePath}</Text>
//       </View>
//     </SafeAreaView>
//   );
// };
 
// export default Pdfcom;
 
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//   },
//   titleText: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     paddingVertical: 20,
//   },
//   textStyle: {
//     fontSize: 18,
//     padding: 10,
//     color: 'black',
//     textAlign: 'center',
//   },
//   imageStyle: {
//     width: 150,
//     height: 150,
//     margin: 5,
//     resizeMode: 'stretch',
//   },
// });


import RNImageToPdf from 'react-native-image-to-pdf';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


import { Dimensions,   SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  PermissionsAndroid,
  Platform,
} from 'react-native'
import React ,{useState}from 'react'

function Pdfcom()  {
    const [filePath, setFilePath] = useState('');
   const state = {
      imagePath: "",
      pdf: "",
    };
  const isPermitted = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs access to Storage data',
          },
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        alert('Write permission err', err);
        return false;
      }
    } else {
      return true;
    }
  };
  onCapture = (uri) => {
    console.log("do something with ", uri);
    this.setState({ imagePath: uri.replace("file://", "") });
    console.log("this is " + state.imagePath);
  };
 
    const createPDF = async () => {
    if (await isPermitted()) {
      let options = {
      	imagePaths:  ['./assets/login.jpg','./assets/login.jpg'],
			name:  'PDFName',
			maxSize: { // optional maximum image dimension - larger images will be resized
				width: 900,
				height: Math.round(windowHeight() / windowWidth() * 900),
			},
			quality: .7, 
      };
      let file = await RNImageToPdf.create(options);
      console.log(file.filePath);
      setFilePath(file.filePath);
      alert(file.filePath);

    }
  };
  // try {
	// 	const options = {
	// 		imagePaths:  ['/path/to/image1.png','/path/to/image2.png'],
	// 		name:  'PDFName',
	// 		maxSize: { // optional maximum image dimension - larger images will be resized
	// 			width: 900,
	// 			height: Math.round(windowHeight() / windowWidth() * 900),
	// 		},
	// 		quality: .7, // optional compression paramter
	// 	};
	// 	const pdf = await RNImageToPdf.createPDFbyImages(options);
		
	// 	console.log(pdf.filePath);
	// } catch(e) {
	// 	console.log(e);
	// }
    return (
    <SafeAreaView style={{flex: 1}}>
      <Text style={styles.titleText}>
        Example to Make PDF in React Native from HTML Text
      </Text>
      <View style={styles.container}>
        <TouchableOpacity onPress={createPDF}>
          <View>
            <Image
              //We are showing the Image from online
              source={{
                uri:
                  'https://raw.githubusercontent.com/AboutReact/sampleresource/master/pdf.png',
              }}
              style={styles.imageStyle}
            />
            <Text style={styles.textStyle}>Create PDF</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.textStyle}>{filePath}</Text>
      </View>
    </SafeAreaView>
  );
};
 
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  textStyle: {
    fontSize: 18,
    padding: 10,
    color: 'black',
    textAlign: 'center',
  },
  imageStyle: {
    width: 150,
    height: 150,
    margin: 5,
    resizeMode: 'stretch',
  },
});
export default Pdfcom