import React from 'react'
import { View, Text ,TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useRouter, Link } from 'expo-router'
import { COLORS, sizes } from '../../../constants'
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard'
import useFetch from '../../../hooke/useFetch'
import styles from './nearbyjobs.style'

const NearbyJobs = () => {

  const router = useRouter()

  const {data, isLoading, error} = useFetch('search', {
    query:'React developer',
    num_pages:1
  })



  console.log(data)
  return (
<View style={styles.container}>



<View style={styles.header}>
<Text style={styles.headerTitle}>
    NearBy Jobs
  </Text>

  <TouchableOpacity>
  <Link style={styles.headerBtn} href='/nearby-jobs/nearby'>
    Show All
  </Link>
  </TouchableOpacity>
</View>

<View style={styles.cardsContainer}>
  
  {isLoading? (
    <ActivityIndicator size="large" colors={COLORS.primary}/>

  ): error? (
    
    <Text>
      Something went wrong
    </Text>
    
  ):(
    data?.map((job) => (
      <NearbyJobCard 
      job={job} 
      key={`nearby-job-${job?.job_id}`}
      handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
      />
    ))
  )}
</View>

</View>
  )
}

export default NearbyJobs