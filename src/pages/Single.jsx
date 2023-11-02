import React from 'react';
import eu from '../img/eu.jpg';
import Edit from '../img/edit.png';
import Delete from '../img/delete.png';
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Post" />
        <div className="user">
          <img src={eu} alt="Felipe" />
          <div className="info">
            <span>Felipe</span>
            <p>Posted 2 day's ago.</p>
          </div>
          <div className="edit">
            <Link to="/write?edit=1">
              <img src={Edit} alt="Edit" />
            </Link>
            <img src={Delete} alt="Delete" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adip add new content</h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Integer id urna consectetur, accumsan nunc vel, consectetur diam. Ut dictum feugiat sagittis.
        Nulla blandit placerat aliquam. Sed mattis leo enim, ac posuere purus tempor sit amet. Praesent vulputate mattis quam facilisis consectetur.
        Nunc dapibus, dolor ac commodo tristique, nibh nisi imperdiet ante, eget faucibus diam enim sed risus. Aliquam faucibus viverra lorem ut viverra.
        Duis dapibus, erat nec ullamcorper tincidunt, mauris ex tincidunt ligula, vel congue neque arcu non purus.
        Praesent ullamcorper in metus aliquam viverra.
        <br />
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Integer id urna consectetur, accumsan nunc vel, consectetur diam. Ut dictum feugiat sagittis.
        Nulla blandit placerat aliquam. Sed mattis leo enim, ac posuere purus tempor sit amet. Praesent vulputate mattis quam facilisis consectetur.
        Nunc dapibus, dolor ac commodo tristique, nibh nisi imperdiet ante, eget faucibus diam enim sed risus. Aliquam faucibus viverra lorem ut viverra.
        Duis dapibus, erat nec ullamcorper tincidunt, mauris ex tincidunt ligula, vel congue neque arcu non purus.
        Praesent ullamcorper in metus aliquam viverra.
        </p>
      </div>
      <Menu />
    </div>
  )
}

export default Single
