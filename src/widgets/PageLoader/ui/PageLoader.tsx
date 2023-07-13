import { classNames } from 'shared/lib/classNames/classNames'
import { Loader } from 'shared/ui/Loader/Loader'
import cls from './PageLoader.module.scss'

interface PageLoaderProps {
  className?: string
}

export const PageLoader = (props: PageLoaderProps) => {
  return (
    <div className={classNames(cls.PageLoader, {}, [props.className ?? ''])}>
      <Loader/>
    </div>
  )
}
