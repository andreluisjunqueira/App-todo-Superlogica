import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity, 
    TextInput, 
    Dimensions
} from 'react-native';

const { width, height } = Dimensions.get('window');

export default ({
    onEmailChange,
    onPasswordChange,
    onSubmit,
    password,
    email
})=>{
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Logo</Text>
            </View>
            <View style={styles.content}>
                <View style={styles.containerInputs}>
                    <View style={styles.containerInput}>
                        <TextInput 
                            placeholder='E-mail'
                            style={styles.input}
                            onChangeText={onEmailChange}
                            value={email}
                        />
                    </View>
                    <View style={styles.containerInput}>
                        <TextInput 
                            placeholder='Senha'
                            style={styles.input}
                            secureTextEntry
                            onChangeText={onPasswordChange}
                            value={password}
                        />
                    </View>
                    <View style={styles.containerButton}>
                        <TouchableOpacity 
                            style={styles.loginButton}
                            onPress={onSubmit}>
                            <Text style={styles.loginButtonText}>Logar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText : {
        fontSize: 32,
    },
    content: {
        flex: 2
    },
    containerInputs : {
        flex: 1,
        marginHorizontal: 30,
    },
    containerInput: {
        paddingVertical: 10,
    },
    input: {
        borderBottomWidth: 1,
        fontSize: 18,
    },
    loginButton: {
        backgroundColor: '#4F43A1',
        width: width * .5,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginButtonText: {
        color: '#fff'
    },
    containerButton: {
        marginTop: 35,
        alignSelf: 'center',
    }
})