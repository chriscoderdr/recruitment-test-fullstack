import styles from './pet-item.module.css';

export const PetItem = () => {
    return (
        <div className={styles.dog_item}>
          <div className={styles.imageContainer}>
            <img
              src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format"
            />
            <div className={styles.overlay}>
              <ul>
                <li>golden</li>
                <li>dalmata</li>
                </ul>
            </div>
          </div>
          <p className={styles.dog_name}>Name</p>
        </div>
    );
}