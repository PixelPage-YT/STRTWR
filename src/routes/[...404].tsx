import { useNavigate } from '@solidjs/router';

/**
 * NotFound Page
 * Redirects to index page
 */
export default function NotFound() {
    const navigate = useNavigate();
    navigate('/');
}
