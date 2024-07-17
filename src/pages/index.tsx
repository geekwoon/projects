import Carousel from './component';
import { useState, useEffect } from 'react';
import { fetchExampleData } from '@/services/example';
import styles from './index.less'

export default function HomePage() {

  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetchExampleData();
      console.log('response = ', response);
      setContent(JSON.stringify(response));
    };
    fetchUsers();
  }, []);

  return (
    <div className={styles.container}>
      <Carousel content={[content]} />
      <p>轮播图⽰例</p>
    </div>
  );
}
