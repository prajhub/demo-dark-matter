"use client"

import Servicechoose from "@/components/servicechoose"
import ServiceForm from "@/components/serviceform"
import AboutMain from "@/components/servicesmain"
import ServicesOffer from "@/components/servicesoffer"

export default function AboutUs() {
    return (
        <>
            <AboutMain/>
            <ServicesOffer/>
            <ServiceForm/>
            <Servicechoose/>
        </>
    )
}