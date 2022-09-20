import React from 'react'
import {
  Card,
  Image,
  Divider,
  Affix,
  Typography,
  Space
} from 'antd'

const skills = ['React JS', 'Express JS', 'PostgreSQL']
const imageUrl = 'https://res.cloudinary.com/aldobangun-netlify-app/image/upload/v1663673788/images/uploads/photo_cv_zqkhmb.jpg'

class ProfileDetail extends React.Component {
  render() {
    return (
      <Affix>
        <Card className="profile-card">
          <Image
            className="profile-image"
            src={imageUrl}
            alt="avatar"
          />
          <Typography.Title className="profile-name" level={3}>
            Alfredo Bangun
          </Typography.Title>
          <Divider />
          <Space size={10}>
            {
              skills.map((skill, index) => (
                <React.Fragment key={skill}>
                  <Typography.Text key={skill}>{skill}</Typography.Text>
                  {index + 1 !== skills.length && <Divider type="vertical" />}
                </React.Fragment>
              ))
            }
          </Space>
          <Divider />
          <div className="profile-description">
            <Typography.Title className="profile-description-title" level={5}>About Me</Typography.Title>
            <Typography.Paragraph>
              Hello, my name is Aldo. I am a frontend web developer who likes to help newbs and also
              like to write clean code.
            </Typography.Paragraph>
            <Typography.Paragraph>
              Yes, I like frontend web development, but I also write backend code as well as
              having knowledge in UI/UX design.
            </Typography.Paragraph>
          </div>
        </Card>
      </Affix>
    )
  }
}

export default ProfileDetail
