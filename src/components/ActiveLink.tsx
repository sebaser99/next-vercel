import { FC, CSSProperties } from 'react';

import { useRouter } from 'next/router';
import Link from 'next/link'

interface Props {
    href : string;
    text: string;
}

const style: CSSProperties = {
    color: '#0070f3',
    textDecoration: 'underline'

}



export const ActiveLink: FC<Props> = ({href, text}: Props) => {
    const router = useRouter()
  return (
        <Link href={href} style={router.asPath === href ? style : {}}>{text}</Link>
  );
}
