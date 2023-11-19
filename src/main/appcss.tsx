import { StyleSheet } from 'react-native'
export default StyleSheet.create({
    view: {
        flex: 1
    },
    img: {

    },
    imgview: {
        alignSelf: 'center',
        marginTop: '10%',
        position:'relative',
    
    },
    touc: {
        // width: 100,
        // height: 150,
    },
    img1: {
        width: 150,
        height: 150,

    },
    img2: {
        width: 30,
        height: 30,

    },
    view2: {
        zIndex:2,
        position:'absolute',
        alignSelf:'center',
        height:150,
        borderRadius:150,
        overflow: 'hidden',
        display:'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        width:220,
        marginTop:'32%'
    }
})