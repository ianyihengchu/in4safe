
import { useState } from 'react';
import { Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';
import InputWithLabel from './ui/input-with-label';
import AuthButton from './ui/auth-button';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please enter both email and password",
        variant: "destructive",
      });
      return;
    }
    
    try {
      setIsLoading(true);
      // Mock login - in a real app, this would make an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Success",
        description: "You have successfully logged in",
      });
      
      // Redirect to dashboard
      navigate('/dashboard');
    } catch (error) {
      toast({
        title: "Failed to login",
        description: "Please check your credentials and try again",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto animate-fade-up">
      <form onSubmit={handleSubmit} className="space-y-6">
        <InputWithLabel
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
        
        <InputWithLabel
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
        
        <div className="grid grid-cols-1 gap-4">
          <AuthButton 
            type="button"
            variant="outline"
            fullWidth
            onClick={() => toast({ description: "Password reset functionality would be integrated here" })}
          >
            Forgot Password
          </AuthButton>
          
          <AuthButton
            type="submit"
            disabled={isLoading}
            className="w-full"
          >
            {isLoading ? 'Loading...' : 'Login'}
          </AuthButton>
        </div>
      </form>
      
      <div className="mt-8 space-y-4">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/20"></div>
          </div>
          <div className="relative flex justify-center text-xs">
            <span className="px-2 bg-background text-white/60">Or continue with</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-3">
          <AuthButton 
            variant="outline" 
            fullWidth 
            onClick={() => toast({ description: "Google login would be integrated here" })}
            icon={<Mail size={18} />}
          >
            Login with Google
          </AuthButton>
          
          <AuthButton 
            variant="outline" 
            fullWidth
            onClick={() => toast({ description: "iCloud login would be integrated here" })}
          >
            Login with iCloud
          </AuthButton>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
