import React, { useState } from 'react';
import { View, Alert, Button } from 'react-native';
import { TextInput } from 'react-native-paper';
import login from '../../util/login';
import { Title, LinkButton, SpacerInline } from '../../elements';
import InputLabel from '../../elements/FormTextInput/InputLabel';
import styles from './LoginScreen.styles';
import { useNavigation, useNavigationParam } from 'react-navigation-hooks';

export default () => {
  const { navigate } = useNavigation();
  const [email, setEmail] = useState(useNavigationParam("email") || "");
  const [password, setPassword] = useState(useNavigationParam("password") || "");
  const [hidePwd, setHidePwd] = useState(true);
  const handleLogin = async () => {
    const statusCode = await login({ email, password });
    switch (statusCode) {
      case 202:
        navigate("LoginSuccessScreen");
        break;
      case 401:
        Alert.alert("Incorrect email or password");
        break;
      case 500:
        Alert.alert("Network error - please try again");
        break;
      default:
        Alert.alert(statusCode);
        break;
    }
  };

  return (
    <View style={styles.outerContainer}>
      <SpacerInline height={140} />
      <Title text="I am a donor." />
      <SpacerInline height={40} />

      <InputLabel text="Email Address" />
      <TextInput
        label=""
        value={email}
        onChangeText={text => setEmail(text)}
        style={styles.input}
        underlineColor="white"
        autoCapitalize="none"
      />
      <InputLabel text="Password" />
      <View style={styles.passwordContainer}>
        <View style={{ flex: 8 }}>
          <TextInput
            label=""
            textContentType="password"
            value={password}
            secureTextEntry={hidePwd}
            onChangeText={text => setPassword(text)}
            style={styles.input}
            underlineColor="gray"
            autoCapitalize="none"
          />
        </View>
        <View style={{ flex: 2, marginBottom: 15 }}>
          <Button
            onPress={() => setHidePwd(!hidePwd)}
            title={hidePwd ? "show" : "hide"}
          />
        </View>
      </View>
      <SpacerInline height={40} />
      <LinkButton text="Log In" onPress={() => handleLogin()} />
      <SpacerInline height={10} />
      <LinkButton text="Register" destination="RegistrationScreen" />
    </View>
  );
};
