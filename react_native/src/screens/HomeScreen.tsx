import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { UserCircleIcon } from "react-native-heroicons/solid";
import { logout } from '../service/requests/auth';
import Bookings from '../components/home/Bookings';
import { useRoute } from '@react-navigation/native';
import { getUserPhotoUrl } from '../service/storage';

const HomeScreen = () => {
  const userPhotoUrl  = getUserPhotoUrl() as string | null;
  return (
    <View className='flex-1 bg-white'>
      <SafeAreaView/>

      <View className='flex-row justify-between items-center px-4 py-2'>
      <Text className='font-okra text-3xl'>
        Bus Tickets
      </Text>
      <TouchableOpacity onPress={logout}>
      {userPhotoUrl !== null ? 
      <Image className='rounded-full w-10 h-10 border-gray-300 border-[2px] object-cover p-2' source= {{uri: userPhotoUrl}}/>
    :
    <UserCircleIcon color='red' size={38} />}
    </TouchableOpacity>
      </View>

      <Bookings/>
    </View>
  )
}

export default HomeScreen