import * as React from 'react';
import ValidationComponent from 'react-native-form-validator';
import {View, StyleSheet, Text, TextInput, Button} from 'react-native'

export default class ResumeFrom extends ValidationComponent {
    state = {
        name: '',
        nickname: '',
        age: '',
        skill: ''
    }
    _onSubmit = () => {
        this.validate({
            name: { required: true },
            nickname: { required: true },
            age: { required: true ,number: true} ,
            skill: { required: true }
        })
    }
    render() {
        return (
            <View style={StyleSheet.container}>
                <View>
                    <Text style = {styles.getErrorMessages}>
                        {this.getErrorMessages()}
                    </Text>
                </View>

                <Text>Full name</Text>
                <View style={styles.TextInput}>
                    <TextInput onChangeText={(text) => this.setState({name: text})}
                    value={this.state.name}
                    ></TextInput>
                </View>

                <View style={{ marginTop: 20 }}>
                    <Text>Nick name</Text>
                    <TextInput 
                    style={styles.TextInput }
                    onChangeText={(text) => this.setState({nickname: text})}
                    value={this.state.nickname}
                    ></TextInput>
                </View>

                <View style={{ marginTop: 20 }}>
                    <Text>Age</Text>
                    <TextInput 
                    style={styles.TextInput }
                    onChangeText={(text) => this.setState({age: text})}
                    value={this.state.age}
                    ></TextInput>
                </View>

                <View style={{ marginTop: 20 }}>
                    <Text>Skill</Text>
                    <TextInput 
                    style={styles.TextAreaInput }
                    onChangeText={(text) => this.setState({skill: text})}
                    value={this.state.skill}
                    multiline={true}
                    ></TextInput>
                </View>
                <View style={{ marginTop: 20}}>
                    <Button 
                    title = 'create Resume'
                    onPress= {this._onSubmit}
                    ></Button>
                </View>
                
                

            </View>
            )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 30,
        backgroundColor: 'white',
        minHeight: '100%'
    },
    TextInput: {
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1,
        borderRadius: 10
    },
    TextAreaInput: {
        height: 100,
        borderColor: 'gray',
        borderWidth:1
    },
    getErrorMessages: {
        color: 'red',
        marginBottom: 20
    }
})