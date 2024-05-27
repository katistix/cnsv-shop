import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { produse } from "@/products"



export function FeaturedSection() {
    return (
        <Carousel className="w-[90%] m-4"

            opts={{
                loop: true,
            }}>
            <CarouselContent>
                {produse.map((produs, index) => {
                    return (
                        <CarouselItem key={index} className="basis-1/5">
                            <a href={"/product/" + produs.id}>
                                <Card>
                                    <CardContent className="flex aspect-square">
                                        {produs.name} {produs.price} ROBUX
                                    </CardContent>
                                </Card>
                            </a>
                        </CarouselItem>
                    )
                })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
