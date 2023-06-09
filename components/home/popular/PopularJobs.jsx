import React, {useState} from 'react'
import { View, Text ,TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useRouter , Link} from 'expo-router'
import { COLORS, sizes } from '../../../constants'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'
import useFetch from '../../../hooke/useFetch'
import styles from './popularjobs.style'

const PopularJobs = () => {

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

  // const isLoading = false;
  // const error = false;

  console.log(data)
  return (
<View style={styles.container}>


<View style={styles.header}>
<Text style={styles.headerTitle}>
    Popular Jobs
  </Text>

  <TouchableOpacity>
  <Link style={styles.headerBtn} href='/popular-jobs/popular'>
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
  <FlatList data={data}
  horizontal
  renderItem={({item}) => (
    <PopularJobCard item={item} handleCardPress={handleCardPress} selectedJob={selectedJob}/>
  )}

  keyExtractor={item => item?.job_id}/>
  )}
</View>

</View>
  )
}

export default PopularJobs