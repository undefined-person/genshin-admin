import { Container } from '@/shared/ui/Container'
import { Button } from '@/shared/ui/Button'

import { Label } from '@/shared/ui/Label'
import { Input } from '@/shared/ui/Input'
import { Card, CardContent, CardHeader } from '@/shared/ui/Card'

import EnglishIcon from '@/shared/assets/flags/uk.svg'
import RussianIcon from '@/shared/assets/flags/russian.svg'
import UkrainianIcon from '@/shared/assets/flags/ukrainian.svg'

export const AddHeroPage = () => {
  return (
    <Container title="Add Hero">
      <div className="grid grid-cols-3 gap-8 mt-4">
        <Card>
          <CardHeader className="flex flex-row justify-center items-center gap-2">
            <span>English</span>
            <img className="w-8 h-8" src={EnglishIcon} alt="English Flag" />
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label>Name</Label>
              <Input placeholder="Enter name" />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Image</Label>
              <Input placeholder="Enter image" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row justify-center items-center gap-2">
            <span>Russian</span>
            <img className="w-8 h-8" src={RussianIcon} alt="English Flag" />
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label>Name</Label>
              <Input placeholder="Enter name" />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Image</Label>
              <Input placeholder="Enter image" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row justify-center items-center gap-2">
            <span>Ukrainian</span>
            <img className="w-8 h-8" src={UkrainianIcon} alt="English Flag" />
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label>Name</Label>
              <Input placeholder="Enter name" />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Image</Label>
              <Input placeholder="Enter image" />
            </div>
          </CardContent>
        </Card>
      </div>
      <Button className="w-full mt-4">Add Hero</Button>
    </Container>
  )
}
