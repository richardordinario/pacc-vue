import { defineStore } from 'pinia'
import { ref, computed, unref } from 'vue'

export const useAgencyStore = defineStore('agency', () => {
    const agencies = ref([
        {
            id: 1,
            name: "Agenct Name",
            locations: ["Australia", "United Kingdom"],
            banner_image: "",
            external_link: "https://google.com",
            logo_image: "https://stmp-prod.ams3.cdn.digitaloceanspaces.com/1732726494965_PureLM_logo_WHITE_ON_TEAL20.3.15.jpg",
            added_by: "StudioSpace",
            suggested_by: "StudioSpace",
            status: "short-list"
        },
        {
            id: 2,
            name: "Agency Corp",
            locations: ["Australia"],
            banner_image: "https://stmp-prod.ams3.cdn.digitaloceanspaces.com/1732533013179_GW_Facebook_Banner.jpg",
            external_link: "https://google.com",
            logo_image: "https://stmp-prod.ams3.cdn.digitaloceanspaces.com/1732532388474_Gravitywell_LinkedIn_Profile_Photo.jpg",
            added_by: "",
            suggested_by: "StudioSpace",
            status: ""
        },
        {
            id: 3,
            name: "Agency Inc",
            locations: ["Australia", "United Kingdom"],
            banner_image: "https://stmp-prod.ams3.cdn.digitaloceanspaces.com/1732540378368_TLDR_Linkedin_Banner_(1).jpg",
            external_link: "https://google.com",
            logo_image: "https://stmp-prod.ams3.cdn.digitaloceanspaces.com/1732540329697_TLDR_Marketplace_Logo.jpg",
            added_by: "",
            suggested_by: "StudioSpace",
            status: ""
        },
        {
            id: 4,
            name: "Agency Net",
            locations: ["Australia", "United Kingdom"],
            banner_image: "https://stmp-prod.ams3.cdn.digitaloceanspaces.com/1729884542767_62cd2fb0a0086874e911481b_logo383.svg",
            external_link: "https://google.com",
            logo_image: "https://stmp-prod.ams3.cdn.digitaloceanspaces.com/1729885215276_Screenshot_2024-10-25_at_20.39.38.png",
            added_by: "",
            suggested_by: "StudioSpace",
            status: ""
        },
    ])

    const getShortLists = async() => {
        return await unref(agencies)?.filter(item => item.status === 'short-list');
    }

    const getSuggestedLists = async() => {
        return await unref(agencies)?.filter(item => item.status != 'short-list');
    }

    const addToShortList = async (item) => {
        await unref(agencies)?.forEach(val => {
            if(val.id === item.id) {
                val.status = "short-list"
                val.added_by = "Client"
            }
        })
    }

    const removeFromShortList = async (item) => {
        await unref(agencies)?.forEach(val => {
            if(val.id === item.id) {
                val.status = ""
                val.added_by = ""
            }
        })
    }

    return {
        agencies,
        getShortLists,
        getSuggestedLists,
        addToShortList,
        removeFromShortList
    }
})