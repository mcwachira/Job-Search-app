import React, {useState} from 'react'
import { View, Text ,TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useRouter , Link} from 'expo-router'
import { COLORS, sizes } from '../../constants/'
import useFetch from '../../hooke/useFetch'
import styles from './nearby.styles'
import  AllNearByJobsCard from '../../components/common/cards/allNearby/AllNearbyJobsCard'


const Nearby = () => {

    const router = useRouter()


    const [selectedJob, setSelectedJob] =useState()
    const {data, isLoading, error} = useFetch('search', {
      query:'React developer',
      num_pages:1
    })
  
    const handleCardPress=(item) => {
      router.push(`/job-details/${item.job_id}`);
      setSelectedJob(item.job_id)
    }
  
    console.log(data)
    return (
  <View style={styles.container}>
  
  
  
  <View style={styles.header}>
  <Text style={styles.headerTitle}>
      NearBy Jobs
    </Text>
  

  </View>


  <View style={styles.cardsContainer}>
  
  {isLoading? (
    <ActivityIndicator size="large" colors={COLORS.primary}/>

  ): error? (
    
    <Text>
      Something went wrong
    </Text>
    
  ):(
  <FlatList data={data}

  renderItem={({item}) => (
    <AllNearByJobsCard item={item} handleCardPress={handleCardPress} selectedJob={selectedJob} style={styles.popularCard} />
  )}

  keyExtractor={item => item?.job_id}/>
  )}
</View>

</View>
  )
}

export default Nearby