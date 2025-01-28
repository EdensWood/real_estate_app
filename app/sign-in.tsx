import {View, Text, SafeAreaView, Animated, Image, TouchableOpacity, Alert, ScrollView} from 'react-native'
import React from 'react'

import images from "@/constants/images";
import icons from "@/constants/icons";
import {login} from "@/lib/appwrite";
import {useGlobContext} from "@/lib/global-provider";
import {Redirect} from "expo-router";

const SignIn = () => {

    const {refetch, loading, isLoggedIn } = useGlobContext();

    if(!loading && isLoggedIn) return <Redirect href='/'/>

    const handleLogin = async() => {
        const result = await login();

        if(result) {
            refetch();
        } else {
            Alert.alert('Error','Login Failed');
        }
    };
    return (
        <SafeAreaView className="bg-white h-full">
            <ScrollView contentContainerStyle={{height:'100%'}}>
                <Image source={images.onboarding} className="w-full h-4/6" resizeMode="contain"/>
                <View className="px-10">
                    <Text className="text-base text-center uppercase font-rubik text-black-200">Welcome to Woodz
                        Estate</Text>

                    <Text className="text-3xl font-rubik-bold text-black-300 text-center mt-2">
                        Let's Get Closer to {"\n"}
                        <Text className="text-primary-300">Your Ideal Home</Text>
                    </Text>

                    <Text className="text-lg font-rubik text-black-200 text-center mt-12">
                        Login to Woodz Estate with Google
                    </Text>

                    <TouchableOpacity onPress={handleLogin}
                                      className="bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5">
                        <View className="flex flex-row items-center justify-center">
                            <Image source={icons.google} className="w-6 h-6" resizeMode={"contain"}/>
                            <Text className="text-lg font-rubik-medium text-black-300 ml-2">Continue with Google</Text>
                        </View>

                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default SignIn
