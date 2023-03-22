import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { checkImageURL } from "../../../../utils";
import styles from './nearbyjobcard.style'

const NearbyJobCard = ( { job, handleNavigate } ) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={handleNavigate}
        >
            <TouchableOpacity
                style={styles.logoContainer}
            >

                <Image
                    source={
                        {
                            uri: checkImageURL(job.employer_logo)
                                ? job.employer_logo
                                : process.env.DEFAULT_LOGO.toString()
                        }
                    }
                    resizeMode="contain"
                    style={styles.logoImage}
                />

            </TouchableOpacity>

            <View
                style={styles.infoContainer}
            >
                <Text
                    style={styles.jobName}
                >
                    {job.job_title}
                </Text>
                <Text
                    style={styles.jobType}
                >
                    {job.job_employment_type}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default NearbyJobCard